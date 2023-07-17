
import styles from './Search.module.css';
import {SearchProps} from "@/components/Search/Search.props";
import cn from "classnames";
import {Button, Input} from "@/components";
import {useEffect, useState} from "react";
import SearchIcon from "./search.svg";
import {useRouter} from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };



    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder={"Поиск..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => (e.key == "Enter") ? goToSearch() : ''}
            />
            <Button
             appearance={"primary"}
             className={styles.button}
             onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};