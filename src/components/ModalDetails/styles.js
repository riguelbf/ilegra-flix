import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 500;
  width: 0%;
  height: 52rem;
  top: 20%;
  left: 20%;
  color: #fff;
  box-shadow: 0 1.5rem 4rem rgba($color-dark, 0.15);

  @include responsive(tab_port) {
    height: 38rem;
  }
  @include responsive(phone) {
    height: 50rem;
  }

  div.container {
    background: linear-gradient(90deg, #000 50%, transparent);
    padding-top: 3rem;
    padding-left: 5rem;

    @include responsive(tab_port) {
      background: linear-gradient(
        90deg,
        rgb(0, 0, 0) 55%,
        rgba(0, 0, 0, 0.733),
        transparent
      );
      width: 88%;
    }

    @include responsive(tab_medium) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.966) 65%, transparent);
      width: 100%;
    }

    @include responsive(phone) {
      padding-top: 1rem;
      padding-left: 1rem;
    }


   .title {
      font-size: 4rem;
   }

   .rating {
      font-size: 2rem;
      color: $color-green-modal;
   }

   .info {
      padding-top: 1.6rem;
      font-size: 2rem;

      @include responsive(phone) {
         padding-top: 1.2rem;
      }
   }

   .episode {
      padding-top: .5rem;
      font-size: 2rem;
   }

   .overview {
      color: $color-modal-grey-2;
      padding-top: 2rem;
      font-size: 2rem;
      hyphens: auto;
      width: 60%;
      line-height: 1.2;

      @include responsive(lg_desktop) {
         width: 60%;
         font-size: 1.8rem;
      }

      @include responsive(tab_port) {
         width: 80%;
      }

      @include responsive(tab_medium) {
         width: 95%;
         color: rgba(255, 255, 255, 0.877);
      }
      @include responsive(phone) {
         padding-top: 1rem;
         font-size: 1.7rem;
      }
   }

   button {
      text-transform: uppercase;
      font-weight: 500;
      cursor: pointer;
      background-color: transparent;
      color: #fff;
      border: .5px solid $color-modal-grey-2;
      border-radius: 2px;
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-right: 1rem;
      padding: 1rem 2rem 1rem 2rem;
      transition: all .2s;
      align-items: baseline;

      @include responsive(phone) {
         margin-top: 1rem;
      }

      &:hover {
         transform: scale(1.09);
      }

      &.btn-red {
         background-color: red;
         border: none;
      }

      &.btn--icon {
         fill: #fff;
         padding-right: 1rem;
         height: 1.4rem;
         width: 1.4rem;
      }

      svg {
        margin-right: 10px;
      }
   }

&.show {
   transition: .5s .3s ease-out;
   top: 25%;
   left: 0;
   visibility: visible;
   opacity: 1;
   width: 65rem;
   height: 26.5rem;
   border: solid 1px green;
   box-shadow: 0 1.5rem 4rem rgba($color-dark, 0.15);
   background-size: cover; background-image: url("https://image.tmdb.org/t/p/original//61m8HGEWwE4q8oSz3AY5vl5F3BS.jpg");
}

&.hide {
    visibility: hidden;
}
`;
