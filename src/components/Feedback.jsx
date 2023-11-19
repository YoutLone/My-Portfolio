import styled from 'styled-components';

const feedbacks = [
  {
    id: 1,
    name: 'Ansar Ibrahim',
    description: `
                Working with Than Myo Htet is a pleasure, as his positive attitude and enthusiasm are contagious.
                He is committed to meeting project deadlines and takes pride in delivering projects that exceed
                expectations. Companies seeking a skilled and reliable software developer should look no further than
                Than Myo Htet. He is a valuable asset to any team and will undoubtedly contribute to the success of any
                software development endeavor.
                `,
    image: 'https://avatars.githubusercontent.com/u/117971223?v=4',
    Github: 'https://github.com/AnsarIbrahim',
    likedin: 'https://www.linkedin.com/in/ansar-ibrahim/',
  },
  {
    id: 2,
    name: 'Abdourahmane Jalloh',
    description: `
                I have had the pleasure to work with Than Myo. We met several times in a Morning session and Stand Up 
                team, I can say Than is the best software engineer and passionate that I've ever met, with his critical 
                thinking to solve problems. He is really careful with details and delivers a project on time. 
                I recommend everyone to work with Than.
                `,
    image: 'https://avatars.githubusercontent.com/u/67812267?v=4',
    Github: 'https://github.com/aradradev',
    likedin: 'https://www.linkedin.com/in/abdul-jalloh/',
  },
  {
    id: 3,
    name: 'Zuheb Ahmed',
    description: `
                Working alongside Than Myo Htet has been a fantastic experience. I had the opportunity to collaborate 
                with him multiple times since our meeting at Microverse. He is an incredibly driven and proficient 
                developer. I distinctly recall a situation where he provided invaluable assistance when I faced a project
                hurdle. His capacity to communicate respectfully and his high level of professionalism truly stand out. 
                It's a privilege to collaborate with him, and I wholeheartedly endorse Than Myo Htet as an invaluable 
                addition to any team seeking a skilled and motivated individual.
                `,
    image: 'https://avatars.githubusercontent.com/u/88501552?v=4',
    Github: 'https://github.com/zuhebahmed88091',
    likedin: 'https://www.linkedin.com/in/zuheb-ahmed/',
  },
  {
    id: 4,
    name: 'Htet Wai Yan',
    description: `
                Than Myo Htet is one of the best people to work with. I met him at Microverse, and we have had the 
                chance to work together a couple of times. He is a highly motivated and skillful developer. 
                I remember a time when he helped me out when I was stuck on a project. His ability to communicate 
                in a respectful way and his professionalism are top-notch. It is my pleasure to work with him, 
                and I would recommend Than Myo Htet as a valuable asset for any team in need of a skillful and 
                motivated individual.
                `,
    image: 'https://avatars.githubusercontent.com/u/102011195?v=4',
    Github: 'https://github.com/HtetWaiYan7191',
    likedin: 'https://www.linkedin.com/in/htet-wai-yan19/',
  },
];

const Feedback = () => (
  <Section id="feedback">
    <div>
      <h1>This is Feedback page.</h1>
    </div>
  </Section>
);

export default Feedback;

const Section = styled.section``;
