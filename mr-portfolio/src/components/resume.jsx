export default function Resume() {
    return (

<div className="w-full h-fit flex flex-col items-center">
      <embed src="/Royal-Eisenberg_Resume.pdf" type="application/pdf" className="w-full h-[990px] hidden sm:inline" />
      <a href="/Royal-Eisenberg_Resume.pdf" download className="text-xl sm:hidden">Download Resume</a>
</div>
    );
};
