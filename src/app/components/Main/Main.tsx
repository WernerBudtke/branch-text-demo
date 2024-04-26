'use client'
import Image from "next/image";
import { Tiptap } from "../Tiptap";
import { VscEye } from "react-icons/vsc";
import { SlPencil } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi2";
import { TbMessage2Plus } from "react-icons/tb";
import { TbMessage2Share } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { GiBreakingChain } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosGitBranch } from "react-icons/io";
import { PiFloppyDisk } from "react-icons/pi";
import { GrMagic } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";

const Main = () => {
  const [appState, setAppState] = useState({
    branchedParagraphStartingPos: 0,
  })

  const [branchedParagraphPosition, setBranchedParagraphPosition] = useState(0)
    const handleBranchedParagraphClick = () => {
      setAppState(prevState => ({
        ...prevState,
        branchedParagraphStartingPos: branchedParagraphPosition
      }));
    }
  
    console.log(appState, "appState")
    return(<>
      <header className="bg-white flex w-full justify-between border-gray-500 border-b">
        <div className="pl-4 flex items-center gap-8">
          <GiHamburgerMenu className="h-5 w-5"/>
          <div className="flex items-center gap-4">
            <HiAcademicCap className="fill-purple-700 h-6 w-6"/>
            <div>
              <h5 className="text-gray-500">Project Name</h5>
              <h4 className="text-black">Demo Email Template</h4>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center  border-b border-purple-700">
            <SlPencil className="h-4 w-4 fill-purple-700 ml-2"/>
            <p className="text-purple-700 mr-2">Edit Mode</p>
          </div>
          <div className="flex gap-2 items-center">
            <VscEye className="h-5 w-5 ml-2"/>
            <p className="mr-2">Preview Mode</p>
          </div>
          </div>
        <div className="flex gap-2">
          <div>
            <h5 className="text-black">John Doe</h5>
            <h6 className="text-gray-500">Organization Name</h6>
          </div>
          <Image src="/luca.webp" width={50} height={50} alt="profile icon" className="rounded-full"/>
          </div>
      </header>
      <main className="w-full justify-between flex">
        <div className="flex flex-col border-r border-gray-500 min-h-screen">
          <div className="border-b border-gray-500 w-full px-4 py-4">
            <TbMessage2Plus  className="h-5 w-5 border-b border-gray-500"/>
          </div>
          <div className="border-b border-gray-500 w-full px-4 py-4">
            <TbMessage2Share className="h-5 w-5 border-b border-gray-500"/>
          </div>
          <div className="border-b border-gray-500 w-full px-4 py-4">
            <BsGrid1X2 className="h-5 w-5 border-b border-gray-500"/>
          </div>
          <div className="border-b border-gray-500 w-full px-4 py-4">
            <BiCoinStack className="h-5 w-5 border-b border-gray-500"/>
          </div>
          <div className="border-b border-gray-500 w-full px-4 py-4">
            <IoPeopleOutline className="h-5 w-5 border-b border-gray-500"/>
          </div>
          <div className="border-b border-gray-500 w-full px-4 py-4">
            <GiBreakingChain className="h-5 w-5"/>
          </div>
        </div>
        <div className="bg-gray-700 flex w-full justify-center">
          <div className="w-1/2 bg-white ml-[400px]">
            <Tiptap onBranchedParagraphClick={setBranchedParagraphPosition}/>
          </div>
        </div>
        <div className="max-w-[400px] border-l border-gray-500 flex flex-col items-center px-4">
          <div className="flex justify-evenly gap-6 py-4 w-full">
            <div className="flex items-center gap-2 rounded-full bg-green-500 px-2 py-2">
              <PiFloppyDisk className="fill-white h-6 w-6"/>
              <p className="text-white">Save Email</p>
            </div>
            <div className="flex items-center gap-2 rounded-full px-2 py-2 border border-gray-500">
              <FaGear className="fill-purple-700 h-6 w-6"/>
              <p className="text-purple-700">Settings</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Add Features</h3>
              <p className="text-base text-gray-500">Add any of the Singulate features to your current email template</p>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-full border border-gray-500 px-6 py-2 mb-4 w-full">
              <div className="flex gap-3">
                <CiShoppingTag className="w-6 h-6"/>
                <p className="text-black text-md">Smart Tag</p>
              </div>
              <IoIosInformationCircle className="ml-16 fill-gray-500 w-6 h-6"/>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-full border border-gray-500 px-6 py-2 mb-4 w-full" onClick={handleBranchedParagraphClick}>
              <div className="flex gap-3">
                <IoIosGitBranch className="w-6 h-6" />
                <p>Branched Paragraph</p>
              </div>
              <IoIosInformationCircle className="ml-16 fill-gray-500 w-6 h-6"/>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-full border border-gray-500 px-6 py-2 w-full">
              <div className="flex gap-3">
                <GrMagic className="w-6 h-6"/>
                <p>Singulated Text</p>
              </div>
              <IoIosInformationCircle className="ml-16 fill-gray-500 w-6 h-6"/>
            </div>
          </div>
        </div>
      </main>
    </>
)}

export default Main