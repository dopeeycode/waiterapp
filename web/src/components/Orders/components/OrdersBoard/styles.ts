import styled from 'styled-components'

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  display: flex;
  height: 13.813rem;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;

  > header {
    display: flex;
    padding: 0.5rem;
    font-size: 0.875rem;
    align-items: center;
    gap: 0.5rem;
  }
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    background-color: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 0.5rem;
    height: 8rem;
    padding: 2.5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    strong {
      font-weight: 500;
    }

    span {
      color: #666;
      font-size: 0.875rem;
    }

    & + button {
      margin-top: 1.5rem;
    }
  }
`
