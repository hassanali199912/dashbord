export default function StudentBilling() {
  return <>
    <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Billing</h1>
    </div>
  </div>
  <div className="container-fluid page__container">
    <div className="alert alert-soft-warning d-flex align-items-center card-margin" role="alert">
      <i className="material-icons mr-3">error_outline</i>
      <div className="text-body">
        You have an invoice <a href="#">#21387</a> due for
        <strong className="text-danger">$49.00</strong>
      </div>
      <a href className="btn btn-warning ml-auto">Pay Now!</a>
    </div>
    <div className="card card-form">
      <div className="row no-gutters">
        <div className="col-lg-4 card-body">
          <p><strong className="headings-color">Basic Information</strong></p>
          <p className="text-muted mb-0">This account is billed to:</p>
        </div>
        <div className="col-lg-8 card-form__body card-body">
          <div className="d-flex align-items-center flex-wrap">
            <div className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={60} viewBox="0 0 40 26">
                <defs>
                  <linearGradient id="pEkgXa" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#ECEEF8" />
                  </linearGradient>
                  <linearGradient id="pEkgXb" x1="0%" x2="66.866%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#191E62" />
                    <stop offset="100%" stopColor="#10289A" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <rect width={40} height={26} fill="url(#pEkgXa)" rx={4} />
                  <path fill="#000" fillOpacity=".101" fillRule="nonzero" d="M4 .75A3.249 3.249 0 0 0 .75 4.006v17.988A3.256 3.256 0 0 0 4 25.25h32a3.249 3.249 0 0 0 3.25-3.256V4.006A3.256 3.256 0 0 0 36 .75H4zM4 0h32c2.204 0 4 1.793 4 4.006v17.988A3.999 3.999 0 0 1 36 26H4c-2.204 0-4-1.793-4-4.006V4.006A3.999 3.999 0 0 1 4 0z" />
                  <path fill="url(#pEkgXb)" d="M20.015 11.197C20.03 9.315 21.77 8 24.243 8c.964 0 1.739.21 2.341.43l-.44 2.05c-1.12-.516-2.109-.48-2.467-.432-.723.094-1.053.463-1.062.809-.024 1.14 3.517 1.282 3.507 3.834-.01 2.012-1.729 3.309-4.357 3.309-1.12-.01-2.199-.245-2.782-.513l.453-2.12c.581.272 1.312.631 2.57.611.72-.01 1.49-.297 1.497-.946.004-.424-.323-.728-1.298-1.203-.948-.462-2.207-1.24-2.19-2.632zm10.795-3.02h2.137l2.02 9.672h-2.314l-.304-1.444H29.14l-.522 1.444h-2.626l3.754-8.963c.18-.43.585-.71 1.064-.71zm.368 2.613l-1.318 3.632h2.076l-.758-3.632zM16.832 8.177h2.5l-2.068 9.672h-2.502l2.07-9.672zm-3.702 0h2.627l-4.054 9.672H9.06L7.063 10.13c-.12-.475-.226-.65-.594-.85-.602-.327-1.595-.633-2.469-.822l.06-.281h4.257c.543 0 1.03.36 1.154.985l1.054 5.598 2.605-6.583z" />
                </g>
              </svg>
            </div>
            <strong>Visa card ending in 2428</strong>
            <div className="ml-auto">
              <button className="btn btn-danger"> Remove</button>
              <button className="btn btn-outline-primary"> Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-form">
      <div className="row no-gutters">
        <div className="col-lg-4 card-body">
          <p><strong className="headings-color">Invoices</strong></p>
          <p className="text-muted mb-0">Your past payments</p>
        </div>
        <div className="col-lg-8 card-form__body">
          <div className="table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th className="text-center">Amount</th>
                  <th className="text-center">Status</th>
                  <th className="text-center" style={{"width":"140px"}}>Date</th>
                </tr>
              </thead>
              <tbody className="list">
                <tr>
                  <td>
                    <a href="invoice.html">#<span>12199</span></a>
                  </td>
                  <td className="text-center">
                    $49.00
                  </td>
                  <td className="text-center">
                    <div className="badge badge-warning">
                      DUE
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center text-muted">
                      <i className="material-icons icon-16pt mr-1">today</i>
                      25 May 2019
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoice.html">#<span>38331</span></a>
                  </td>
                  <td className="text-center">
                    $49.00
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success">
                      PAID
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center text-muted">
                      <i className="material-icons icon-16pt mr-1">today</i>
                      18 Apr 2019
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoice.html">#<span>58331</span></a>
                  </td>
                  <td className="text-center">
                    $49.00
                  </td>
                  <td className="text-center">
                    <div className="badge badge-danger">
                      UNPAID
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center text-muted">
                      <i className="material-icons icon-16pt mr-1">today</i>
                      12 Feb 2019
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoice.html">#<span>23421</span></a>
                  </td>
                  <td className="text-center">
                    $49.00
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success">
                      PAID
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center text-muted">
                      <i className="material-icons icon-16pt mr-1">today</i>
                      28 Jan 2019
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </>;
}
