// import 綠藍金武器及摩諾斯工具 from './../json/（一）綠藍金武器及摩諾斯工具.json';
// import 綠藍金防具 from './../json/（二）綠藍金防具.json';
// import 黑星武器 from './../json/（三）黑星武器.json';
// import 黑星防具 from './../json/（四）黑星防具.json';
// import 死神 from './../json/（五）死神.json';
// import 紫星 from './../json/（六）紫星.json';
// import 銀刺繡及綠藍金飾品不含摩諾斯 from './../json/（七）銀刺繡及綠藍金飾品不含摩諾斯.json';
// import 綠藍金釣竿獵槍馬具 from './../json/（八）綠藍金釣竿、獵槍與馬具.json';
// import 舊藍船裝 from './../json/（九）舊藍船裝.json';
// import 二階綠船裝 from './../json/（十）二階綠船裝.json';
// import 二階藍船裝 from './../json/（十一）二階藍船裝.json';
// import 三階綠船裝 from './../json/（十二）三階綠船裝.json';
// import 三階藍船裝 from './../json/（十三）三階藍船裝.json';

// import EnhanchedTable from "./../pages/component/EnhanchedTable";

import React, { lazy, Suspense, useEffect } from 'react';
import uuid from 'react-uuid';
import "./css/enhanched.css"

const EnhanchedTable = lazy(() => import('./../pages/component/EnhanchedTable'));



// export const Enhanched = () => {
export const Enhanched = ({ jsonData }: { jsonData: any }) => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            {Object.keys(jsonData).map((key) => (
                <div key={uuid()}>
                    <h1>{key}</h1>
                    <Suspense fallback={<div>Loading...</div>}>
                        <EnhanchedTable json_data={jsonData[key]} />
                    </Suspense>
                </div>
            ))}

            {/* <h1>綠藍金武器及摩諾斯工具</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={綠藍金武器及摩諾斯工具} />
            </Suspense>
            <h1>綠藍金防具</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={綠藍金防具} />
            </Suspense>
            <h1>黑星武器</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={黑星武器} />
            </Suspense>
            <h1>黑星防具</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={黑星防具} />
            </Suspense>
            <h1>死神</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={死神} />
            </Suspense>
            <h1>紫星</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={紫星} />
            </Suspense>
            <h1>銀刺繡及綠藍金飾品不含摩諾斯</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={銀刺繡及綠藍金飾品不含摩諾斯} />
            </Suspense>
            <h1>綠藍金釣竿獵槍馬具</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={綠藍金釣竿獵槍馬具} />
            </Suspense>
            <h1>舊藍船裝</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={舊藍船裝} />
            </Suspense>
            <h1>二階綠船裝</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={二階綠船裝} />
            </Suspense>
            <h1>二階藍船裝</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={二階藍船裝} />
            </Suspense>
            <h1>三階綠船裝</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={三階綠船裝} />
            </Suspense>
            <h1>三階藍船裝</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <EnhanchedTable json_data={三階藍船裝} />
            </Suspense> */}
        </>
    );
};

