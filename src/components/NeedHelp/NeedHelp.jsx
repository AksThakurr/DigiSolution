import "./NeedHelp.css";
function NeedHelp()
{
    return (
        <>
           <section className="needhelp-container">
                   <div className="need-help">
                    <div className="need-heading">
                        <h2><span>Need Help?</span> We’ve Got You Covered</h2>
                        <p>Here are some quick answers to things people ask us all <br />the time.</p>
                    </div>
                    <div className="need-help-msg">
                           <div className="msg">
                             <h3>How do I create my first customized ecommerce product?
                                 <span class="arrow up">&gt;</span>
                             </h3>
                            
                             <p>Pick any product you like—clothing, mugs, jewellery, you name it. Click “Customize,” and our design
                             tool will open. Change colors, add text, upload images, and watch your product update instantly.</p>
                           </div>
                            <div className="msg">
                                <h3>Can I use my photos or logo?
                                     <span class="arrow down">&gt;</span>
                                </h3>
                            </div>
                             <div className="msg">
                                <h3>Do you have to order a certain amount?
                                     <span class="arrow down">&gt;</span>
                                </h3>
                             </div>
                              <div className="msg">
                                <h3>Do you have to order a certain amount?
                                     <span class="arrow down">&gt;</span>
                                </h3>
                              </div>
                    </div>
                   </div>
           </section>
           
        </>
    )

}
export default NeedHelp;