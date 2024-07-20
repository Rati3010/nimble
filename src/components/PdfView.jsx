import React, { Component } from 'react';

class PdfView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfUrl: '',
    };
    this.fileInputRef = React.createRef();
  }

  openPdf = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ pdfUrl: e.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  render() {
    return (
      <div className="pdf-view p-4">
        <input
          type="file"
          accept="application/pdf"
          onChange={this.openPdf}
          ref={this.fileInputRef}
          className="mb-4"
        />
        <iframe src={this.state.pdfUrl} width="100%" height="600px" className="border"></iframe>
      </div>
    );
  }
}

export default PdfView;

