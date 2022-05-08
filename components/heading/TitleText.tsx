const TitleText = (props: any) => {
  function fillContent() {
    return { __html: props.data };
  }

  return (
    <p
      dangerouslySetInnerHTML={fillContent()}
      className="text-[18px] mb-[20px]"
    ></p>
  );
};

export default TitleText;
