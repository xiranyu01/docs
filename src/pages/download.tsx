import Layout from '@theme/Layout';
import React from 'react';
import mac from '../assets/images/mac.png';
import studioIcon from '../assets/images/studio_icon.png';
import windows from '../assets/images/windows.png';

const STUDIO_WINDOWS_URL =
  'https://coscene-artifacts-prod.oss-cn-hangzhou.aliyuncs.com/studio/latest/coScene-studio-Windows-Setup.exe';

const STUDIO_MACOS_URL =
  'https://coscene-artifacts-prod.oss-cn-hangzhou.aliyuncs.com/studio/latest/coScene-studio-Mac-Installer.dmg';

export default function Hello() {
  return (
    <Layout title="Download">
      <div className="flex flex-col h-full w-full px-20 py-10 gap-10">
        <h1 className="bg">产品下载</h1>
        <div className="flex items-center gap-[10px]">
          <img src={studioIcon}></img>
          <span className="text-2xl font-semibold">Studio</span>
        </div>
        <a className="text-blue-500" href="/docs/receipts/studio/install-studio">
          您可以根据 PC 操作系统按照相应引导进行 coScene Studio 的安装。
        </a>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-[10px]">
              <img src={windows}></img>
              <span className="text-xl font-semibold text-sky-600">Windows</span>
            </div>
            <div className="flex flex-col gap-2">
              <a className="text-green-500" href={STUDIO_WINDOWS_URL}>
                点击下载 Windows 安装包
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-[10px]">
              <img src={mac}></img>
              <span className="text-xl font-semibold text-sky-600">mac OS</span>
            </div>
            <div className="flex flex-col gap-2">
              <a className="text-green-500" href={STUDIO_MACOS_URL}>
                点击下载 macOS 安装包
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
