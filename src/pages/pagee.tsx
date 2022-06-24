import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
/*  <StaticImage
        src="https://logo.clearbit.com/bms.com"
        alt=""
       class="w-20 h-20 object-cover mx-2"
      />
              <StaticImage
        src="https://img.myabcam.com/EloquaImages/clients/Abcam/%7Bdfe94a58-279a-4a1e-9863-0fd52be2fe21%7D_Glen_580x640px.jpg"
        alt=""
        class="w-20 h-20 object-cover mx-2 rounded-full"
      />*/
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>
          <div class="pt-8 pb-4 px-8 bg-white opacity-75 shadow-lg rounded-lg mt-8 mb-4 lg:mx-80">
            <div class="flex justify-center my-4">
   
    </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold text-center">Your <span id="accountName"></span> Account Advocate</h2>
    <p class="mt-2 text-gray-600 text-center mb-4">Speak with Glen Mars, your <span id="accountName"></span> Account Advocate about how you could partner with abcam</p>
    <div class="items-center  mb-10" style="text-align:center">
    
    <a id="mailto" href="" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Schedule a call with Glen
    </a>

  </div>
   
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p>
  </Layout>
)

export default IndexPage
