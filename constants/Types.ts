export type Socials = "Instagram" | "X";
export type MoreInfo = { name: string; value: string };
export type Post = {
    id: string;
    imageUrl: string;
    content: string;
    origin: string;
    isOffensive: boolean;
    company: {
        name: string;
        logo: string;
        reasons: {
            id: string;
            content: string;
        }[]
    };
}
export type Direction = "left" | "right";