
import styles from './HhData.module.css';
import {HhDataProps} from "@/components/HhData/HhData.props";
import cn from "classnames";
import {Card} from "@/components/Card/Card";
import React from "react";
import RateIcon from './rate.svg';
import {priceRu} from "@/helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
                <Card className={styles.count}>
                    <div className={styles.Title}>Всего вакансий</div>
                    <div className={styles.countValue}>{count}</div>
                </Card>
                <Card className={styles.salary}>
                    <div>
                    <div className={styles.Title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon />
                        <RateIcon />
                    </div>
                    </div>
                    <div>
                    <div className={styles.Title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon />
                    </div>
                    </div>
                    <div>
                    <div className={styles.Title}>Профессиоанл</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                    </div>
                    </div>
                </Card>
        </div>
    );
};