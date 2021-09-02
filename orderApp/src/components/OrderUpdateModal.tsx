// @ts-ignore
import Modal from 'basicComponents/components/Modal';
import {useState} from 'react';
import {IOrder} from 'src/types';

interface IOrderUpdateModal {
  order: IOrder | null;
  onOrderUpdated: (order: IOrder) => void;
}
export default function OrderUpdateModal(props: IOrderUpdateModal) {
  if (props.order === null) return null;
  const [updatedOrder, setUpdatedOrder] = useState(props.order);
  
  const validate = () => {

  }
  const onFormSubmit = () => {
    validate()
    props.onOrderUpdated(updatedOrder)
  }
  const onCancel = () => {
    
  }
  return (
    <>
      <Modal>
        <div className="content">
          <form onSubmit={onFormSubmit}>
            <input
              value={updatedOrder.customer}
              onChange={(e) => {
                const value = e.target.value;
                setUpdatedOrder({...updatedOrder, customer: value})
              }}
            />
            <button onClick={onCancel} type="reset">Cancel</button>
            <button type="submit">Submit</button>
          </form>

        </div>
      </Modal>
    </>
  )

}