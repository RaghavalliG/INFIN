import { Group, Tooltip } from '@mantine/core';
export default function PriceList() {
    return <div className="price-list">
        <div className="container">
        <div className="price-duration-choose">
        <div className="price-dur-btn">

          {/* Monthly subscription */}
        <a href='' className='btn btn-primary outline'
          onClick={(event) => event.preventDefault()}
        >
          Monthly
        </a>
        {/* yearly subscription */}
        <a className='btn btn-primary'
          onClick={(event) => event.preventDefault()}
        >
          Yearly
        </a>
        </div>
        <div className="save-txt">SAVE UP TO 30%</div>
        </div>
        <div className="price-list-wrap">
            <div className="item card">
                <div className="card-body">
                    <h3 className="card-title">Starter</h3>
                    <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <div className="price-txt">$<ins>20</ins><span className='month-name'>/month</span></div>
                    <div className="action"><a href="" className="btn btn-primary">Get Started</a></div>
                </div>
            </div>
            <div className="item card active">
                <div className="card-body">
                    <h3 className="card-title">Pro</h3>
                    <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <div className="price-txt">$<ins>120</ins><span className='month-name'>/month</span></div>
                    <div className="action"><a href="" className="btn btn-primary">Get Started</a></div>
                </div>
            </div>
            <div className="item card">
                <div className="card-body">
                    <h3 className="card-title">Professional</h3>
                    <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <div className="price-txt">$<ins>200</ins><span className='month-name'>/month</span></div>
                    <div className="action"><a href="" className="btn btn-primary">Get Started</a></div>
                </div>
            </div>
        </div>
        </div>
    </div>
  }