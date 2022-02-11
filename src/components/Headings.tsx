type Props = {
    content: string;
};


function Heading({ content }: Props) {
    return (
        <>
            <h1>{content}</h1>
        </>
    );
}

export default Heading;