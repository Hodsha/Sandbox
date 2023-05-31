import { DiCss3, DiHtml5, DiReact } from 'react-icons/di';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiCsharp, SiMicrosoftsharepoint, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandTypescript } from 'react-icons/tb';

const skillsIcons = [
    { name: 'react', icon: <DiReact className='absolute inset-0 w-full h-full object-cover' color='#194D33' />, skill: '80%' },
    { name: 'html', icon: <DiHtml5 className='absolute inset-0 w-full h-full object-cover' color='orange' />, skill: '75%' },
    { name: 'css', icon: <DiCss3 className='absolute inset-0 w-full h-full object-cover' color='#2965f1' />, skill: '70%' },
    { name: 'typescript', icon: <TbBrandTypescript className='absolute inset-0 w-full h-full object-cover' color='#007acc' />, skill: '80%' },
    { name: 'csharp', icon: <TbBrandCSharp className='absolute inset-0 w-full h-full object-cover' color='#FFDFD991' />, skill: '50%' },
    { name: 'sharepoint', icon: <SiMicrosoftsharepoint className='absolute inset-0 w-full h-full object-cover' color='#038186' />, skill: '75%' },
]
function DevSkills() {
    return (
        <>    <div className="justify-center flex mt-10 mb-4"><h1 className="text-center float-none mt-10 text-4xl">Skills</h1></div>
            <br />
            <div className='justify-center flex'>
                {skillsIcons.map((skill) => (
                    <div className='relative w-14 mobile:w-12 h-14 mobile:h-12 rounded-full   float-left ml-3 cursor-pointer overflow-hidden'>
                        {skill.icon}
                        <div className=' absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out'>
                            <p className='text-black text-lg font-bold bg-white bg-opacity-50 p-4 rounded-full absolute inset-0 flex items-center justify-center'>{skill.skill}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default DevSkills;
