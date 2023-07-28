import styles from './Product.module.css';
import cn from "classnames";
import {ProductProps} from "@/components/Product/Product.props";
import {Button, Card, Divider, Rating, Review, ReviewForm, Tag} from "@/components";
import {declOfNum, priceRu} from "@/helpers/helpers";
import {ForwardedRef, forwardRef, useRef, useState} from "react";
import Link from "next/link";
import {motion} from 'framer-motion';

export const Product = motion(forwardRef(({
                                              product,
                                              className,
                                              ...props
                                          }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = async () => {
        await setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
        reviewRef.current?.focus();
    };

    const ReviewVariants = {
        visible: {
            display: 'block',
            opacity: 1,
            height: 'auto'
        },
        hidden:
            {
                display: 'none',
                opacity: 0,
                height: 0
            }
    };

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product} position={isReviewOpened ? 'top' : 'default'}>
                <div className={styles.logo}>
                    <img src={/^https?:\/\//i.test(product.image) ? product.image : process.env.NEXT_PUBLIC_DOMAIN + product.image}
                           alt={product.title}
                           width={70}
                           height={70}/>
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    <span><span className={"visuallyHidden"}>цена</span>{priceRu(product.price)}</span>
                    {product.oldPrice && <Tag className={styles.oldPrice} size={"s"} color={"green"}>
                        <span className={"visuallyHidden"}>скидка</span>
                        {priceRu(product.price - product.oldPrice)}
                    </Tag>}
                </div>
                <div className={styles.credit}>
                    <span className={"visuallyHidden"}>кредит</span>
                    {priceRu(product.credit)}
                    /
                    <span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}>
                    <span className={"visuallyHidden"}>{"рейтинг " + (product.reviewAvg ?? product.initialRating)}</span>
                    <Rating rating={product.reviewAvg ?? product.initialRating}/>
                </div>
                <div className={styles.tags}>{product.categories.map(c => <Tag key={c} color={'ghost'}
                                                                               className={styles.category}
                                                                               size={'s'}>{c}</Tag>)}</div>
                <div className={styles.priceTitle} aria-hidden={true}>Цена</div>
                <div className={styles.creditTitle} aria-hidden={true}>Кредит</div>
                <div
                    className={styles.rateTitle}><Link href={"#ref"}
                                                       onClick={() => scrollToReview()}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</Link>
                </div>
                <Divider className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>
                    <Button appearance={'primary'}>Узнать подробнее</Button>
                    <Button
                        appearance={isReviewOpened ? 'primary' : 'ghost'}
                        arrow={isReviewOpened ? 'down' : 'right'}
                        className={styles.reviewButton}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                        aria-expanded={isReviewOpened}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <motion.div
                variants={ReviewVariants}
                initial={'hidden'}
                animate={isReviewOpened ? 'visible' : 'hidden'}
            >
                <Card
                    color={'blue'}
                    position={isReviewOpened ? 'bottom' : 'default'}
                    className={cn(styles.review, styles.reviews)}
                    ref={reviewRef}
                    tabIndex={0}
                >
                    {product.reviews.map(r => (
                        <div key={r._id}>
                            <Review review={r}/>
                            <Divider/>
                        </div>
                    ))}
                    <ReviewForm productId={product._id}/>
                </Card>
            </motion.div>
        </div>
    );
}));