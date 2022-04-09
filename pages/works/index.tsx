import Layout from '../../components/layout';

import WorkCarousel from '../../components/carousel';
import Close from '../../components/close';

import data from '../../resources/json/works.json';
import HeaderTitle from '../../components/heading/HeaderTitle';
import HeaderWrapper from '../../components/heading/HeaderWrapper';

const Works = () => {
  return (
    <Layout works>
      <Close />
      <div className='container w-full px-[15px] sm:w-[750px] md:w-[970px] lg:w-[1170px] mx-auto grid gap-5 mb-8'>
        <div className='float-left relative px-[15px] flex justify-center text-center'>
          <HeaderWrapper mb={20}>
            <HeaderTitle data={data.title} />
          </HeaderWrapper>
        </div>
        <div className='work mt-5 h-auto md:h-[370px] flex flex-col md:flex-row gap-7 items-center'>
          <div className='w-full md:w-[72%]'>
            <WorkCarousel type='large' />
          </div>
          <div className='w-full md:w-[32%] flex flex-row md:flex-col justify-between h-full gap-5 md:gap-0'>
            <div className=''>
              <WorkCarousel type='mini' />
            </div>
            <div className=''>
              <WorkCarousel type='mini' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
