import {FirstLevelMenuItem} from "@/interfaces/menu.interface";
import {TopLevelCategory} from "@/interfaces/page.interface";

import ServicesIcon from "@/helpers/icons/cloud.svg";
import BooksIcon from "@/helpers/icons/book.svg";
import ProductsIcon from "@/helpers/icons/box.svg";
import CoursesIcon from "@/helpers/icons/hat.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
    {route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products }
];