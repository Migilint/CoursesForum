export interface IReviewForm {
    name: string;
    title: string;
    description: string;
    rating: number;
}

export interface IReviewSentResponse {
    message: string;
}

export interface IReviewErrorResponse {
    message: string;
}