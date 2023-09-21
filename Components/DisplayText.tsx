import next from "next";

//-------------------------------------------------------------------------------------


// interface GenText {
//     Text:string
// }




export default function DisplayText (props:any) {

    return <section>

        <p>
            {props.text}
        </p>
    </section>
}