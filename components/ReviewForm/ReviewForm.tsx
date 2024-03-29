import styles from './ReviewForm.module.css';
import cn from "classnames";
import {ReviewFormProps} from "@/components/ReviewForm/ReviewForm.props";
import {Button, Input, Rating, TextArea} from "@/components";
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSentResponse} from "@/components/ReviewForm/ReviewForm.interface";
import {useState} from "react";
import axios, {AxiosError} from "axios";
import {API} from "@/helpers/api";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<IReviewForm>();

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что-то пошло не так');
            }
        } catch (e) {
            const err = e as AxiosError;
            setIsError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} key={productId}>
            <div className={cn(styles.reviewForm, className)}
                 {...props}
            >
                <Input
                    {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                    placeholder={'Имя'}
                    error={errors.name}
                    aria-invalid={!!errors.name}
                />
                <Input
                    {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
                    placeholder={'Заголовок отзыва'}
                    className={styles.title}
                    error={errors.title}
                    aria-invalid={!!errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name={'rating'}
                        rules={{
                            ...
                                {
                                    required: {value: true, message: 'Укажите рейтинг'},
                                    minLength: 1
                                }
                        }}
                        render={({field}) => (
                            <Rating
                                isEditable
                                error={errors.rating}
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                            />
                        )}
                    />
                </div>
                <TextArea
                    {...register('description', {required: {value: true, message: "Заполните описание"}})}
                    placeholder={'Текст отзыва'}
                    className={styles.description}
                    error={errors.description}
                    aria-label={"Текст отзыва"}
                    aria-invalid={!!errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance={'primary'} onClick={() => clearErrors()}>Отправить</Button>
                    <span
                        className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку.</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)}>
                <div role="alert">
                    <div className={styles.successTitle}>Ваш отзыв отправлен.</div>
                    <div>
                        Спасибо, ваш отзыв будет опубликован после проверки.
                    </div>
                </div>
                <button
                    className={styles.close}
                    onClick={() => setIsSuccess(false)}
                    aria-label={"Закрыть оповещение"}
                >
                    <CloseIcon/>
                </button>
            </div>}
            {isError && <div className={cn(styles.error, styles.panel)}>
                <div role={"alert"}>
                    <div>Что-то пошло не так, попробуйте обновить страницу.</div>
                    <div>{isError}</div>
                </div>
                <button
                    className={styles.close}
                    onClick={() => setIsError(undefined)}
                    aria-label={"Закрыть оповещение"}
                >
                    <CloseIcon/>
                </button>
            </div>}
        </form>
    );
};