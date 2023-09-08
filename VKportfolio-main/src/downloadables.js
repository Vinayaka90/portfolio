import ExamplePdf from './example.pdf';

function ResumeD() {
  return (
    <div className='resumepdf'>
      

      <a
        href={ExamplePdf}
        download="Sumukh's Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button className='resbtn'><b>Download My Resume</b></button> 
      </a>
    </div>
  );
}


export default ResumeD;