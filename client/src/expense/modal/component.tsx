import * as React from "react";
import "./styles.css";

import Modal from "@material-ui/core/Modal";

class ModalWrapper extends React.Component {
  public state = {
    open: false
  };
  public props: {
    controller: (open: () => any, close: () => any) => JSX.Element;
    content: (open: () => any, close: () => any) => JSX.Element;
  };

  public handleOpen = () => {
    this.setState({ open: true });
  };

  public handleClose = () => {
    this.setState({ open: false });
  };

  public render() {
    return (
      <div>
        {this.props.controller(this.handleOpen, this.handleClose)}

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div
            className="modal"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.target === e.currentTarget && this.handleClose()
            }
          >
            <div className="modal-content">
              {this.props.content(this.handleOpen, this.handleClose)}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalWrapper;
