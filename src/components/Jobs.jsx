import React, {useEffect,useState} from 'react'
import {API_BASE_URL} from '../apiConfig';
import axios from 'axios';
import DOMPurify from 'dompurify'; 

export default function Jobs() {
  const [data, setData] = useState("");
  const [loaderDiv, setLoaderDiv] = useState("");
  const [mainDiv, setMainDiv] = useState("d-none");
  const fetchApi = async () => {
    let siteinfo = sessionStorage.getItem('siteinfo')
    // if(siteinfo == null){
      await axios.get(`${API_BASE_URL}/siteinfo`).then(({data})=>{
      setData(data.siteinfo[0]['jobs'])
      setLoaderDiv("d-none");
        setMainDiv("");
      let json= data.siteinfo[0]['jobs'];
      // sessionStorage.setItem('siteinfo', json)

      })

    // } else {
    //   setData(siteinfo);
    //   setLoaderDiv("d-none");
    //   setMainDiv("");
    // }

  
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <>
    <div className={loaderDiv}>
    <div class="ph-item">
        <div class="ph-col-12">
            <div class="ph-row">
                <div class="ph-col-8 empty"></div>
                <div class="ph-col-6"></div>
                <div class="ph-col-6 empty"></div>
                <div class="ph-col-12"></div>
                <div class="ph-col-6 empty"></div>
                <div class="ph-col-12"></div>
            </div>
        </div>
    </div>
    </div>
    <div className={mainDiv}>
      <p className="card-text" dangerouslySetInnerHTML={{ __html: sanitizeHTML(data) }} />
    </div>
    </>
  )
}
