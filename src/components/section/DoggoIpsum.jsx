import Container from "../ui/Container";
import styled from "styled-components";
import { bp, colors } from "../../utils/styles";

const DoggoIpsum = () => (
  <DoggoIpsumContainer>
    <a href="https://doggoipsum.com/" target="_blank" rel="noreferrer">
      <h2 className="doggo-ipsum__title">Doggo Ipsum</h2>
    </a>
    <div className="doggo-ipsum__content">
      <p>
        Doggo ipsum big ol pupper porgo h*ck tungg heckin boofers aqua doggo
        smol, you are doing me a frighten long water shoob super chub boofers
        clouds smol. Puggorino many pats length boy much ruin diet woofer snoot,
        bork heckin good boys smol borking doggo with a long snoot for pats.
        Pupper heck doggo fat boi pats big ol shoober, fat boi doggorino long
        water shoob he made many woofs. Clouds many pats yapper heckin good boys
        and girls, blep you are doin me a concern. Wow very biscit heckin angery
        woofer long woofer blep borkdrive shooberino tungg, blep I am bekom fat
        heckin you are doing me a frighten.
      </p>
      <p>
        Heckin very taste wow the neighborhood pupper, thicc. Porgo h*ck shibe
        very good spot, shibe boof. Adorable doggo smol long water shoob, waggy
        wags. The neighborhood pupper wow such tempt big ol pupper long water
        shoob, you are doing me the shock heck. Such treat ruff borkf, you are
        doin me a concern. Woofer big ol pupper fluffer corgo ruff, puggorino
        most angery pupper I have ever seen doing me a frighten, heckin good
        boys long bois h*ck. What a nice floof corgo the neighborhood pupper
        shoob, doggo shoober. Puggo shibe pupperino boofers he made many woofs,
        extremely cuuuuuute porgo aqua doggo. extremely cuuuuuute borkf dat
        tungg tho. Floofs long doggo sub woofer much ruin diet, heckin good boys
        and girls you are doing me a frighten shibe heck, what a nice floof vvv.
      </p>
    </div>
  </DoggoIpsumContainer>
);

const DoggoIpsumContainer = styled(Container)`
  // bacgkround: ${colors.gray[0]};
  padding-bottom: 4rem;

  .doggo-ipsum__title {
    font-weight: bold;
    color: transparent;
    font-size: 2.4rem;
    -webkit-text-stroke: 2px ${colors.gray[9]};
    margin: 1rem 0;
    letter-spacing: 2px;
    transition: all ease-out 200ms;

    &:hover {
      letter-spacing: 10px;
    }
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: ${bp.s}) {
    // background: ${colors.gray[2]};
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: ${bp.m}) {
    // background: ${colors.gray[4]};
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: ${bp.l}) {
    // background: ${colors.gray[6]};
    .doggo-ipsum__content {
      column-count: 2;
      column-gap: 2rem;
    }
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: ${bp.xl}) {
    .doggo-ipsum__title {
      // -webkit-text-stroke-color: ${colors.gray[0]};
    }
    .doggo-ipsum__content {
      column-count: 3;
      column-gap: 2rem;
    }
    // background: ${colors.gray[9]};
    // color: ${colors.gray[4]};
  }
`;

export default DoggoIpsum;
