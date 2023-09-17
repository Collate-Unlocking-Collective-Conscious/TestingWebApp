import next from "next";

//-------------------------------------------------------------------------------------


interface GenText {
    Text:string
}




export default function DisplayText (props:GenText) {

    return <section>

        <p>
            {props.Text}
        </p>
    </section>
}