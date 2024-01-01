import Head from "next/head"
export default function HtmlHead(){

    return(
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./css/styles.css" rel="stylesheet" />
        <title>Rapid Deployer</title>
        </Head>
    )
}