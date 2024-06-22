"use client";
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import {useState, useEffect} from 'react';
import {getTranslations} from 'next-intl/server';
import { Slider, Button, Tooltip, Spinner } from '@radix-ui/themes';
import { PinBottomIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import apiClient from "@/libs/api";
import {toast} from 'react-hot-toast';

// export async function generateMetadata({params: {locale}}: any) {
//   const t = await getTranslations({locale, namespace: 'Playground'});

//   return getSEOTags({
//     title: t('seoTitle'),
//     description: t('seoDesc'),
//     canonicalUrlRelative: locale ? '/' + locale + "/playground" : '/playground',
//   });
// }


const Create = () => {
  const [start, setStart] = useState<number>(0);
  const [total, setTotal] = useState<number>(30);
  const [steps, setSteps] = useState<number>(100);
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const handleGen = async () => {
    if (!prompt) {
      toast.error('prompt is required');
      return;
    }
    setLoading(true);
    const requestData = {
      "prompt": prompt,
      "start": start,
      "total": total,
      "steps": steps,
    };

    try {
      const result: any = await apiClient.post("/gen", requestData);
      console.log('result', result);
      setAudioUrl(result?.url || '');
    } catch (e) {
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div className="container mx-auto py-6 px-0">
      <div className="w-full">
        <div className="ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-6">
              <div className="flex flex-col rounded-xl border border-stroke-light bg-surface-100 group">
                <div className="flex flex-col p-6">
                  Input
                </div>
                <div className="texture-dots m-1 mt-0 flex-1 rounded-lg border border-stroke-lighter bg-surface-200 p-6 group-data-[layout=compact]:m-0 group-data-[layout=compact]:p-0 group-data-[layout=compact]:rounded-xl group-data-[layout=compact]:border-none pb-0">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="space-y-6">
                        <div className="form-control space-y-2">
                          <div className="flex flex-row items-center space-x-1">
                            <label htmlFor="model-input-prompt" className="text-content-strong font-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              <span className="label-text">Prompt</span>
                            </label>
                          </div>
                          <textarea value={prompt} onChange={(event: any) => {
                            setPrompt(event?.target?.value);
                          }} className="flex min-h-[80px] w-full rounded-md border border-stroke-base bg-surface-alpha px-3 py-2 text-sm text-content placeholder:text-content-lighter focus-ring disabled:cursor-not-allowed disabled:opacity-50 no-scrollbar resize-none" name="prompt" id="model-input-prompt" rows={3}></textarea>
                        </div>
                        <div className="open">
                          <div className="mt-4 space-y-6">
                            <div className="form-control space-y-2">
                              <div className="flex flex-row items-center space-x-1">
                                <label htmlFor="model-input-seconds_start" className="text-content-strong font-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  <span className="label-text">Seconds Start</span>
                                </label>
                                <Tooltip content="The start point of the audio clip to generate">
                                  <InfoCircledIcon />
                                </Tooltip>
                              </div>
                              <div className='flex flex-row space-x-4'>
                                <span className="relative flex w-full touch-none select-none items-center">
                                  <Slider max={45} value={[start]} onValueChange={(value: any) => {
                                    setStart(value?.[0] || 0);
                                  }}/>
                                </span>
                                <input type="number" value={start} onChange={(event: any) => {
                                  setStart(Number(event?.target?.value));
                                }} className="flex h-10 rounded-md border border-stroke-base bg-surface-alpha px-3 py-2 text-sm font-medium text-content transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-content-lighter focus-ring disabled:cursor-not-allowed disabled:opacity-50 w-24" name="seconds_start" />
                              </div>
                            </div>
                            <div className="form-control space-y-2">
                              <div className="flex flex-row items-center space-x-1">
                                <label htmlFor="model-input-seconds_start" className="text-content-strong font-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  <span className="label-text">Seconds Total</span>
                                </label>
                                <Tooltip content="The duration of the audio clip to generate Default value: 15">
                                  <InfoCircledIcon />
                                </Tooltip>
                              </div>
                              <div className='flex flex-row space-x-4'>
                                <span className="relative flex w-full touch-none select-none items-center">
                                  <Slider max={45} value={[total]} onValueChange={(value: any) => {
                                    setTotal(value?.[0] || 30);
                                  }}/>
                                </span>
                                <input type="number" value={total} onChange={(event: any) => {
                                  setTotal(Number(event?.target?.value));
                                }} className="flex h-10 rounded-md border border-stroke-base bg-surface-alpha px-3 py-2 text-sm font-medium text-content transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-content-lighter focus-ring disabled:cursor-not-allowed disabled:opacity-50 w-24" name="seconds_start" />
                              </div>
                            </div>
                            <div className="form-control space-y-2">
                              <div className="flex flex-row items-center space-x-1">
                                <label htmlFor="model-input-seconds_start" className="text-content-strong font-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  <span className="label-text">Steps</span>
                                </label>
                                <Tooltip content="The number of steps to denoise the audio for Default value: 100">
                                  <InfoCircledIcon />
                                </Tooltip>
                              </div>
                              <div className='flex flex-row space-x-4'>
                                <span className="relative flex w-full touch-none select-none items-center">
                                  <Slider max={1000} value={[steps]} onValueChange={(value: any) => {
                                    setSteps(value?.[0] || 100);
                                  }}/>
                                </span>
                                <input type="number" value={steps} onChange={(event: any) => {
                                  setSteps(Number(event?.target?.value));
                                }} className="flex h-10 rounded-md border border-stroke-base bg-surface-alpha px-3 py-2 text-sm font-medium text-content transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-content-lighter focus-ring disabled:cursor-not-allowed disabled:opacity-50 w-24" name="seconds_start" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row-reverse' style={{
                      minHeight: 49,
                    }}>
                      <div className='ml-5'>
                        <Button loading={loading} onClick={handleGen}>
                          Run
                        </Button>
                      </div>
                      <Button className='mr-20' variant="outline" onClick={() => {
                        setStart(0);
                        setTotal(15);
                        setSteps(100);
                      }}>
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 lg:col-span-6">
              <div className="flex flex-col rounded-xl border border-stroke-light bg-surface-100 group">
                <div className="flex flex-col p-6">
                  Result 
                </div>
                <Spinner loading={loading} >
                <div className="texture-dots m-1 mt-0 flex-1 rounded-lg border border-stroke-lighter bg-surface-200 p-6 group-data-[layout=compact]:m-0 group-data-[layout=compact]:p-0 group-data-[layout=compact]:rounded-xl group-data-[layout=compact]:border-none pb-0">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="space-y-6">
                        <div className="form-control space-y-2">
                          <div className="flex flex-row items-center space-x-1">
                            <label htmlFor="model-input-prompt" className="text-content-strong font-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              {/* <span className="label-text">Audio</span> */}
                              <figure className='mt-5'>
                                <audio controls src={audioUrl}></audio>
                              </figure>
                            </label>
                          </div>
                          {/* <textarea className="flex min-h-[80px] w-full rounded-md border border-stroke-base bg-surface-alpha px-3 py-2 text-sm text-content placeholder:text-content-lighter focus-ring disabled:cursor-not-allowed disabled:opacity-50 no-scrollbar resize-none" name="prompt" id="model-input-prompt" rows={3}></textarea> */}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      minHeight: 49,
                    }}></div>
                  </div>
                </div>
                {/* <div className='p-5'>
                  <Button size="4" disabled={!audioUrl} onClick={() => {
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = audioUrl;
                    a.download = 'audio.wav';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }} >
                    <PinBottomIcon/> Download
                  </Button>
                </div> */}
                </Spinner>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
