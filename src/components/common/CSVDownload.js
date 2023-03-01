

import { CSVLink } from "react-csv";
import DownloadIcon from "@/components/icon/download";


export default function CSVDownload({ data, headers, filename }) {
    console.log(data.length, '+++csv+++');
    return (<>
        <CSVLink data={data} headers={headers} filename={`${filename}.csv`} className="download-btn">
            {data.length == 1 ?

                <><span className="icon"><DownloadIcon /></span> Download Details</>
                :
                <><span className="icon"><DownloadIcon /></span> Download All</>
            }

        </CSVLink>
    </>)
}