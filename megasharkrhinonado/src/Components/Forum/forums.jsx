import ForumCard01 from "./ForumsCard/ForumCard01";
import ForumCard02 from "./ForumsCard/ForumCard02";

const Forums = () => {
    return (
        <>
            <div className="content">
                <table>
                    <tr>
                        <ForumCard01 />
                    </tr>
                    <td>
                        <ForumCard02 />
                    </td>
                </table>
            </div>
        </>
    );
}

export default Forums;