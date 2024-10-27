export interface ISubmitQuestionProps {
    question: string;
    category: string;
}
export declare const useSubmitQuestion: (context: any, listName: string, siteUrl: string) => {
    submitQuestion: ({ question, category }: ISubmitQuestionProps) => Promise<void>;
    loading: boolean;
    error: string | null;
    success: boolean;
};
//# sourceMappingURL=useSubmitQuestion.d.ts.map