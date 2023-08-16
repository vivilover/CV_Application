import React, { useRef, useState, useCallback, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faFire, faFileDownload, faPrint, faFeather, faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import Button from './Button.jsx';
import '../styles/AppIntro.css';
// import { exportComponentAsPDF } from 'react-component-export-image';
import { useReactToPrint } from "react-to-print";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

export default function AppIntro({ getRefFrom }) {
  const downloadIcon = <FontAwesomeIcon icon={faFileDownload} />;
  const printIcon = <FontAwesomeIcon icon={faPrint} />;

  const printFn = useReactToPrint({
    content: () => getRefFrom.current,
    documentTitle: 'CV',
  })

  const handleDownload = () => {
    const cv = getRefFrom.current;
    html2canvas(cv).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    });
  }

  return (
    <div className="AppIntro bg-amber-50 min-h-screen flex flex-col">
      <h1 className="pt-2 pb-4 flex justify-center tracking-wider">CV Maker</h1>
      <div className="mb-1 pl-4">
        <FontAwesomeIcon icon={faSeedling} className="mr-1 text-lime-600" />
        Craft a beautiful CV to kickstart your career!
      </div>
      <div className="mb-1 pl-4 underline-container">
        <FontAwesomeIcon icon={faFire} className="mr-1 text-rose-400" />
        Made it <span className="underline-1 font-medium">EASY</span> for you:&#160;
        <span className="underline-2">Edit on the example CV</span>
      </div>
      <div className="mb-1 pl-4">
        <FontAwesomeIcon icon={faListAlt} className="mr-1 text-emerald-500" />
        Instructions
      </div>
      <div className="mb-1 pl-4 text-sm">
        <div className="pl-5">
          <FontAwesomeIcon icon={faFeather} className="mr-2 text-blue-400" />
          On the right, click on editable sections and edit
        </div>
        <div className="pl-5">
          <FontAwesomeIcon icon={faFeather} className="mr-2 text-blue-400" />
          Click profile image and upload your picture
        </div>
        <div className="pl-5">
          <FontAwesomeIcon icon={faFeather} className="mr-2 text-blue-400" />
          EXPERTISE section skill bars: adjustable on click
        </div>
      </div>
      <div className="text-xs flex justify-end mr-10 mt-2 text-slate-700">
        *CV format idea originally from&nbsp;
        <a
          href="https://elements.envato.com/resumecv-8VYGUTM"
          target="_blank"
          rel="noreferrer"
          className="font-semibold hover:bg-sky-100">
          <FontAwesomeIcon icon={faDribbble} className=" text-rose-600 bg-pink-200 rounded-lg" />
          &nbsp;kdadanDesign
        </a>
      </div>
      <div className="flex justify-evenly mt-4">
        <Button
          icon={printIcon}
          title="Print CV"
          bgcolor="bg-emerald-500"
          textcolor="text-slate-50"
          handleClick={printFn}
        />
        <Button
          icon={downloadIcon}
          title="Download CV"
          bgcolor="bg-rose-500"
          textcolor="text-slate-50"
          // handleClick={() =>
          //   exportComponentAsPDF(getRefFrom.current, {
          //   fileName: 'CV',
          // })}
          handleClick={handleDownload}
        />
      </div>
      <footer className="h-10 bg-neutral-400 text-white font-semibold
        flex justify-center items-center gap-x-2 mt-auto">
        <div>2023 shinlee</div>
        <div>
          <a href="https://www.github.com/vivilover" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
}