import styled from 'styled-components'

export const HeaderStyle = styled.header`
  height: 11rem;
  background-color: #d73035;

  .content {
    max-width: 76rem;
    padding: 0 1rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .details-side-left {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      color: #fff;

      h1 {
        line-height: 120%;
      }

      h2 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
      }
    }

    .details-side-right {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      > div {
        h1 {
          font-weight: bold;
          line-height: 120%;

          span {
            font-size: 1.5rem;
            font-weight: 400;
          }
        }

        p {
          line-height: 150%;
        }
      }
    }
  }
`
