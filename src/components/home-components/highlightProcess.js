import ContentBlock from "../common/contentBlock";

export default function HighlightProcess() {
    return <div className="highlighted-process bg-white mt-0 pb-4">
        <div className="container">
        <ContentBlock img="/content-img-3.png" imgpos="right">
            <h2 className="secondary-title">Automated Process</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don.</p>
            <ul className="image_bullets">
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</li>
                <li>There are variations of passages of Lorem Ipsum available.</li>
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</li>
            </ul>
        </ContentBlock>
        <ContentBlock img="/content-img-4.png" imgpos="left">
            <h2 className="secondary-title">All-in-one Processing</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don.</p>
            <ul className="image_bullets">
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</li>
                <li>There are variations of passages of Lorem Ipsum available.</li>
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</li>
            </ul>
        </ContentBlock>
        <ContentBlock img="/content-img-3.png" imgpos="right">
            <h2 className="secondary-title">Full Information View</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don.</p>
            <ul className="image_bullets">
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</li>
                <li>There are variations of passages of Lorem Ipsum available.</li>
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</li>
            </ul>
        </ContentBlock>
        </div>
    </div>
}