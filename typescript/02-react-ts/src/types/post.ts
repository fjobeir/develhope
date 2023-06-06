const categories = ["Tech", "Sport", "Social Media"] as const;
type Category = (typeof categories)[number]

export type PostProps = {
    title: string;
    content: string;
    author: {
        name: string;
        url: string;
    }
    category: Category;
};