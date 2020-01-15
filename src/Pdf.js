import React from 'react';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default class Pdf extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  downPdf = () => {
    const targetDom = document.getElementById('pdfcontent');
    // const copyDom = targetDom.cloneNode(true);
    // copyDom.style.width = targetDom.scrollWidth + 'px'
    // copyDom.style.height = targetDom.scrollHeight + 'px'
    // document.body.appendChild(copyDom)
    html2canvas(targetDom, {
      allowTaint: false,
      useCORS: true,
      height: targetDom.scrollHeight,
      width: targetDom.scrollWidth
  }).then(canvas => {
    var contentWidth = canvas.width;
    var contentHeight = canvas.height;
    var pageHeight = contentWidth / 592.28 * 841.89;    
    var leftHeight = contentHeight;
    //页面偏移
    var position = 0;
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    var imgWidth = 595.28;
    var imgHeight = 595.28 / contentWidth * contentHeight;

    var pageData = canvas.toDataURL('image/jpeg', 1.0);
    var pdf = new JsPDF('', 'pt', 'a4');
    //放大会清晰一点
    pdf.internal.scaleFactor = 1.33;
    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);
    } else {
        while (leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 20, position + 40, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -=  841.89;
            //避免添加空白页
            if (leftHeight > 0) {
                pdf.addPage();
            }
        }
    }
    pdf.save('方案配置.pdf');
  });
  }

  render() {
    return (
      <div className="content">
        <button onClick={this.downPdf}>
          下载pdf
        </button>
        <div id="pdfcontent" ref="pdfcontent">
          我是pdf内容
          <table>
            <thead>
              <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>性别</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lin</td>
                <td>12</td>
                <td>1</td>
              </tr>
              <tr>
                <td>lin</td>
                <td>12</td>
                <td>1</td>
              </tr>
              <tr>
                <td>lin</td>
                <td>12</td>
                <td>1</td>
              </tr>
              <tr>
                <td>lin</td>
                <td>12</td>
                <td>1</td>
              </tr>
              <tr>
                <td>lin</td>
                <td>12</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}