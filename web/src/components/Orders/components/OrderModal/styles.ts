import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4.5px);
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBody = styled.div`
  display: flex;
  width: 30rem;
  margin: 0 auto;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;

  border-radius: 0.5rem;
  background: var(--gray-0, #fff);

  small {
    display: block;
    margin-bottom: 0.6rem;
    font-weight: 500;
    color: #333;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      color: #333;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }

  .status-container {
    > div {
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const OrderDetails = styled.section`
  .product-container {
    .item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;

      img {
        border-radius: 0.25rem;
        width: 3.1rem;
        height: 2.4rem;
        object-fit: cover;
      }

      .quantity {
        color: #666;
        font-size: 0.875rem;
      }

      .item-details-main {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      & + .item {
        margin-top: 1rem;
      }
    }
  }
  .total-price {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;
  }
`

export const Actions = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .primary {
    border: 0;
    height: 2.75rem;
    width: 100%;
    background-color: #333;
    display: flex;
    padding: 0.6875rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: 0.3s all;
    border-radius: 3rem;

    &:hover {
      background-color: #444;
    }
  }

  .secondary {
    border: 0;
    padding: 0.5rem 1rem;
    display: inline-block;
    background: transparent;
    transition: 0.3s all;

    &:hover {
      transform: scale(1.1);
    }

    strong {
      color: #d73035;
    }
  }

  strong {
    letter-spacing: 0.05rem;
    color: #fff;
  }
`
