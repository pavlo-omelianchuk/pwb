import { Heading5, ResultWrapper, SectionWrapper } from './PricingCalculator.styles';

export const PricingCalculator = () => {
  return (
    <SectionWrapper>
      <Heading5 className="heading-5">Results</Heading5>
      <div className="container-small">
        <ResultWrapper>
          <div className="heading-4">1,000 Orders</div>
          <div className="heading-2 text-orange">£10,000 GMV</div>
          <div>per month</div>
        </ResultWrapper>
      </div>
      <a className="btn-primary w-button">Book a call</a>
    </SectionWrapper>
  );
};
