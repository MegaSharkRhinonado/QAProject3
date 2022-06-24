import FAQcard from "../ForumsComp/FAQcard"
import ForumComp11 from "../ForumsComp/ForumComp11";

const ForumCard01 = () => {
    const forumCardData = [
        {
            question: "HOW MUCH ARE TICKETS?",
            answer: "Ticket prices vary between venues according to the time, day and event, so please check the cinemas’ individual pages for further information. Please note that there will be an additional surcharge on all 3D film tickets"
        },
        {
            question: "HOW LONG ARE YOUR ADS AND TRAILERS?",
            answer: "We play 25 minutes worth of adverts and trailers prior to each film screening; the length of ads and trailers varies for special events and it can be between 15 and 40 minutes, subject to type of event."
        },
        {
            question: "DO I NEED TO BRING THE CREDIT CARD I BOOKED WITH IF I HAVE AN E-TICKET?",
            answer: "No you don’t, either bring along your e-ticket on your smart phone or a printed version of it."
        },
        {
            question: "I LEFT A PERSONAL ITEM AT ONE OF YOUR CINEMAS LAST NIGHT, HOW CAN I CONTACT THE VENUE?",
            answer: "Please contact us using our online contact us form, alternatively please contact a QACinema representative on 03234 555622."
        }];
    return (
        <>
        <ForumComp11 />
            {
                forumCardData.map(data => {
                    return <div className="screenCards"><FAQcard question={data.question} answer={data.answer} /></div>
                })
            }
        </>
    );
}

export default ForumCard01;


