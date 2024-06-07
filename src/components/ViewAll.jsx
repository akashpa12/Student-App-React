import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row.g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                                <div class="card">
                                    <img src="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/Y0mAruESDwFn4MO5GbYyr/f898df53e63d503d63321d8aea34fdf8/GettyImages-947895170.jpg?fit=thumb" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                                <div class="card">
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ8NDxAPDw0NDg0PDQ0NDQ8NDw0NFhIWFhURFRYYHTQgGBomGxUXITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0rLS0tLS0tLS0tLSstLS0tKysrKy0tKy0rLS8rLSstLS0tLS0tLS4tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIFAwQGB//EAEIQAAEEAAMFBgMFBAcJAAAAAAEAAgMRBBIhBRMxQVEGImFxgZGhscEHFDJCUiOCsvAVJFNictHhFjNDY3OSk6LS/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EADQRAQACAgAFAQUGBQUBAAAAAAABAgMRBBIhMUFREzJhcZEFIkKBobFSwdHh8BRDYpLxM//aAAwDAQACEQMRAD8A7FkS8p6bK2JRExEgkIkU90qGIkNpCNDaQjTSJCJA92qHu00bPdoh7tAxGge7QGRA8ioMqBiNEG7QMRpo2e7TQe7V0Hu1NBZFdA3aaBu00Fu1NAyJoLdpoLdpoIxobRMaCBjUETEi7YWxqaVkaxNCYYqJBiIeRNAyIJBiBhqokGIHkRDyIHlQMMQGVUBagwYqdkTHSSOayNgtz3Gg0KDzbb32sRRuDcJCZtTmfNcbf3QNT60ttcMz3a7ZIhWYX7WsSHAy4WIx6Zt26RjvME2FlOD0lPa/B6f2d29h8fCJsO6xpnY4U+JxF5XD68FqmJierZE7W4ageVA8qGxlVBlRBlQGVAZUBlRSyogyoDKpoRLUUi1BAsU0FkQa7WrFkyBqCQaqiQageRAZUDyoGGqiWVEPKgMqB0gdKgpAnBQePfa3tuSXEjZsbiIo2sdK0fmlOovwAI9VuxV31lrvPhy+yOzxleIxbjpnpt2fotl8mkpj27/Z/ZQNaGGOMt0sOGYn4LlnLM9nXGKsd2qNnu2XiW4qBrmszVIwOOSRnNp99PFZVvzxqWu2Pl6w9UiNgHqpDGWWlUFICkQUgKVBSApAUgKQKkBSBUoCkCyopZUGo1qwZsgaiJhqBhqqHlQGVA6QOlQUgdICkQ6QFICkEXjRJV4R26Lf6dxGoBJi6gk7tvLmt+L3WrJ7zuuy+BbhsKJpsrHOs3IQ2h681oybmejpx9I6ui2bi4pRcckUnjG9rvksa1mO7KZiezX2tLFI1+FLXyOe0h27ie8RCtHOcBTaKsVnvDGbR2lb9nJC/BYZzhTjDHY8QKPyWTVKypVBSB0gKRBSApXQKTQKQFJoFIFSiikQsqApNApNDTaFrbGQBVEgFRKkBSApA6RDpUFICkAgEAgFAEaIPMu0OwhJtePGtcG279rE+i58bC1gkZpprob6JXJqsw2zi6xLqdo4Vzo/2YbmLaLntzkNHJvRYxb1XXorNibJkZKJZcpcWU9+7YwudfEVwbw0PRW0xPZaxMd+6wdsyQ4x2I3shYWNEcbXU2NwI71DjwrW+J0V5tRrTGa9d7dLg48sbW9LA8rNK13pqtrfRmpVDpVDpAUgKQFICkBSApAUgKQFIClQUgVKDTaFrZsgCCQCqGAqHSApAUgaAQCAQCAQIqDT2njBBDJK78MbHPd5AWsbSyrG5eXbF7cQYl+XEN3eKa7dxEHuSskd3WnxBIB9x0WU4piNw2Vy1meWXokmKEcd1egI81hzaheXcqeHa28cS3/eCwYnMktgvpy/1V692eo7LQTucWNY12+bRcQO4Gcw49T048FZ/VjrXfs6Bg0F8efmtjmlKkQ0QKhoBAIgRQgEBSIKQFIopVBSgVINNoWptTAVRMBUNA0QIBFCAQCAQJAIEVBzXb2Wtnzt5vYP4gsZ7w2V8vD+zmxTi9sYfDsJYHOMj3AXkbGC/wCgHqu6sbjTlvOp29yxbjDpKMovR3FjvVcV8c16S66ZIv2OOaKWjmb3ddCLCxjo2RaY7LvARjKK4akaLZDRkmd9W6smo0AgFQ0QIBAUgKQCAVDQCAQCBUg02rS2phVEgqHSqGgEAgSgEUIBAkAoEUHDfaViah3Qu31dchdfULCOt22PdlS9guy8kErcf96w8eNcHg4KUsfcB/I/Kc0bzQNgEt00OoXp0pMRuYeffJW06iXqL4xKwteziKfG/K6voR4rKY3CRMwqMTsNkLXTQst0bHubE3UuIBOVviei5MnDeauqnEeLLHYk5lwmHlNZpIYnOrhmLRfxWNq6k231igVDRAgEDQCAVQIBAIBUFIBQCoEGmFpbk2qokEQ1QIBAIBAKBIoUCQJBGV4a0uPADyQcj9wl2nI57aZhmOcN+5ubO4ccg/keq9LDirgjcxu/7PNzZL8T0ieWn6z8fkzT/Z/CW9yWQSVo5wa5t+IFaeq6I4i22meDx66bhj7P7VmwuI+4Ys3lcGRykk5CfwizxYfHh8s70rkrz0/OGjFntgyRhyz0ntP+f5Do+0cuKjwzn4WJssrXMthdWaO9cvU8NLHNc9OXf3uz0bb191W9idrHEwyh7XNnimlbO1xFh2YkAUKygENA5BoCZsNY+MJjyTPzdJXsuG+Oa/J01ts1gyCBoBVAgEDQCAVAgEAgKQFIBBpBaW1MKiQRDVDRAgSKCgFAkUioEgEGpj8Nv8uHJLWPt8xGhMLSLaDyzEtHkSunhY+9zen7ubieteT17/L+/b5LOKJrGBjGhkbAAxjRQAHDRdTWYOtqDlO2+BEk0BA70ofCfFwILfmfddXC5OSbTPbW/o837Sw+0rTXfevq6TZwkbCxk/eka3K5zTYdWl+dUuO+X706pOvy/q9DFW0UiLzG3NbI2FiMLtSSZgacHMZy/vd65HZ7y+BoeQK2W4mLU1NZ38v7sYxTF9xMadc1wB515FaJy18xP0n+jdyyxk+fsVyzaInz9J/o3RJ5gpz19VMLKJQ1QIBAKgQCBoBECKEQIoQaQWluSCIkFUSVAiBAIEUUiopKBIBQYcXiWxRuleaawWevkPFZ0pN7RWveWGTJXHWbW7Qruze0Di3TTcGZ2RRx6W1jW5n2edlw9gu+uL2e6uSMkZYi8eYdHIdLPEqqxNPFBUbV782FP9m6SU/uxuYP/Z7Fy8ZxPsMF7esaWuH2l6fCd/pP9W2yKSmkvIDxY1JI0vVeTh4Hi5iszmmNx6zt2zfHuY5eyQY88JQfJy2/6Di/Gef1N080ZGwyf2nwJWccHxcf7/7sJtj/AIUxE/nJ7NJWccLxMd88/RjNqeKIPB/tHf8AjKk4ssf79v8AqyiI/gj6p4dpA1Nkk+CvDxeKffnc7nxpLa30ZV0MTQCAVAgEDRAgFQIBQCDSC0NyQVEgqhhUNECAKBKKiVFJAlBq7RxzIIzK86DgBxc7oFlSs2nUJa0VjcuF2jtibEudnNRCnRxt4NDuGb9RGovwK9v7PxVpM+r577ZyXmldT0S+yLFSOxe1IHawwPwz2no+SNoI9of5tYcR0yWj4uvgrRbh6THo9NnPBaHUwyGgVJWFM7v+ZcYW+ALtfjl9l4X2nPtbY8P8Voj8vP8AJ24I5d29I/z+bZjdpJL+olsf+G+X88l6XDR0nJP4pbLV61p6d0GhdLbJ5iOHwRNQzNlP6j7lGuax6MjZnfqKMZpX0ZI5HOIF+PJSZ1DC1YiG0uZqCAQCAQNUCIEAihECARWiFobkwqhhUSRDVAiBFIqCJUVEqKxTztY0ue4NABOp6Dl1SImekEzpwG3NrOxMhaW5GsA3QzXmaTq7z4X6L0sWLkhxZMnNKuxhygEcW6HxYTmHxzD95dOK3JeJcfFYvbYbU8+Pm637MMO0RYucf8eaKyOeSFv/ANFZ8b/9Pyc32Rv2Gp8TLsnjh6lcr1GDEHuk+BUnssKXByZjGB0kf6m6Pxavnaz7bjtR+CJn85/9j6PRiOXH18zH+fpLbxLhYYPwxgD1Xu6iOkeGWKJmOae8oNKrM0EgVUZGlGEtvDN0vqtWWfDRknrpnWlrNUCAQCAVDRAUAihECBIrSBWhuSCqGCgkFQ1UCAQIqKiVBErFXMdtYc7YwSQ0h9f3ZBRDvP8AyXo8BWt4tHl5vH5LYrUtHbzDj5JDlEtW+InMwamuD2j6ei6F79mPESZnFtijGC1w4a1R8tQUHZfZRimt2Y/NdjFzjKBZAAbQWvPnr036Jw3DTXmivaZ3+y+xe3HhxyQWBoC+YMJ9ACuSeLr6O6OFnzKr2n2heIJBJDkL2lkbmSiUZ3d1tggHiRwtSeKrMT46E8NNeu9obAk78svFsTRFF0J5rzfsnHP389u95duWvSuOG5m5nieK9ds0e8RNHvVTlR35uhqTwA1UmdLy+ZaUuOlDw0RTP7wGZga1oHM2StN8s/hknlj0dHgA4A5tCeALsx9VhG+8uHJMTPRtqtYRDVAgEAgaqBFJAIBQCDRC0tyaIaoaB2gLQFoEgRUESoqo7Sw5sMT+hwd6aj6rr4K/Ll+bj4+nNhn4OCxDMsrXjQPIDumbkfp6jovUzU1PNHl5vB5dxOOe8dvl/ZV4/uPNWWNEmvSMg8fAOr3C55nTuiNu97B4cR7MFGy+bEueesm9c13xbXovNzzu0u/DGqwsJiuWXVDn+0EUz5ImxML2NO8dRaKc0HKNT1o+iwyV3jtEd56fXv8AoTuZha7LiMcIYdK6ir8fn7r0sUVrWK17QzpXczZtWtmmzRhZaTRlqaFZtKYR2X7xjQ0ZZY3hgBP4g48tK8FpyxPiFtEzXojsXdyPbT3ObxJdi2uY4cvwlcsOe8z3dnhhpdAXyBJ+a2w5LMyrEIGgEQIGqBAIBAIBAkGkFob0gqhhEMKhoBAkBagSKiVBixEIkY6N34Xgg/5q1tNZi0eEvWLRMT5ec42OnGN35c4I6m6+S+hyZInHH/J83w+C3tpnfuypMW1weMwJt7Kdye06fOr8Qub2drVmY8PQvnpS0Vmetnc9gZs2yIzzE2MDvP7zLa8rN3l62LtCzkAPNc0w3wwBoBWPKz5mywjhayjcdk2Zj6Fba5rx8WcZEC0jotscV6wy54IROdwIHxV/1PwPaRHht4fBANs093MuWE2m3WXPfLNpbEB4gEDxIsVzCkS1WhYgrPbSdoGiC1QIGgEAqhoBAkBai6JBohaW5IFBIFXaGgEBaBWgLUAgSKRQef7ZaBipQfyueadwsmxY5ijfiAvV54tSnyh5tKTW19x+KVDtdmeN+W8zm011nNxsvv8AV8l38LO6zR5P2jXkyUzR4/fwn9n3aaKHC4jByPa2SOd0sQecu8jfWar4kPDif8QXicVjmLdH0fB5IvWN/Nd/7Qsdwe0+Rtcc1mHd0MbU8VjpdMke1q5oaZxtjxTUmoYZNrud+EF3krFLSqcO0ZQBbHeyy9nZeVZ4Ta+bu6g8we6fip1hqmsLvZ0BPfdmA5A13gs6R5aclo7QsrWxqO0AEQ1QWgaIFQWgEAgLRQgLUFeCtLckiGEEgVQ7QK0AgRKgVoC0BaDgO1jgMXOKdZEfCjfcHL059V6GDrSHJl6WUsbw5jvCzX8+C7MOTltEuLisPtcVqevb5+HM7U2Uxz82Ud497z6rdxuLUxePLg+yuJmYnDbvHWP5wrv6Ljbq3Q8yDVey8+XsxLLhoZaL2yyta0HXO6uHLqp7OJ8Mva2jytseZoTE0h8rXxB2b71LCcwcQR3RXT3SmLHPeFnLk8WYJwx7W9zFMeXtovxxxEV3za5trd7OkR0/Zhz3nvK12VgYTLLQdu3yMBc7Z8LWMfbSc7mPtjT1bV95Zajqw3MaWeDwuEc7PnwTxl7pG0NoYQj9190tsY9eP2lPa29f3dV2O2ZFn3gOYtzOAOOdj2a0NCWgN5dToOHPj4uNRHT9NOjDe095dmCuJuCAQCB2gaILTYaoEAgEDRCIRUVFaAK0tqQVErQO0QWgdoBBElFRKgLU2uhau004jtdh496/EMP7UTRwzDWspha5h6df5C7OHtMdHNmrvq5kPynTU3ZXXDR3aEuUyZCKDhxzZjfX0XoYclcmPks8Pi8F8Wb2uPz1/Pz9UGQtbE97qJDnMqtM48PiPNcM05bTEvXx5IyVi0eWripLaYh+YHPXjyTu2QtNpm44HX+qvDM0E/Ja6d5ZSxwMvoeHEWtqLGGMU0gC+RoILHCxg2a1vmB0CDruyrxncNLykV04H6H2XPxEfdbMc9XSLidAQNUO0QWgaIEAgEAii02gtXYSilaDQBWhuStA1UFoHaAtNh2gFRErFUbUCtFU20djmUYzvCsQ2B0Yo22WMEWfPQe621ya5fg12pvfxea4iWgDz1BHQ8wV6e/Lh0rMViLAIBGju8dLv83kOX+mu/B0nmlxcZO68sd2oMVljY3ieOh0NirPpS13vzW26MOPkpFWSC6om9SeHMqRDau8ef6vB5s/gKwr70rKeFZ3fitrFt4XvMnbziea/wANorJsjFnfuiuxuWOon89m/gQg6HZc4ixUcpOh7j+pFgj6+6wvXmrMLWdS71rgQCDYIsHwXnTGujqiQVFFoBA1QAoh2gLQFoFaAtAWgECRVeCtDadoHaCVoBAWgdoC0QiioqKRCAATRt492v2LNh8bK9zX/dJC+VrxbojZssJH4XDofTmvQ4e0WjrPZw8RzV92O7lMZig7XUN4NGuZ58luvffSGvHi5es92TA4OTMXyDKAGBrTxDnXx9B8VlWFlavhyac+KzRaYtt4SE1pcev7rgtVfeZeGbZv4T4BbmCex3f1rERng/N7oKzZuIrH31dl9tFFdfiiGkE8Acyo7Ds9jsw3RP5Q5l8xQsfG/dcmen4obsdvC5XK3AqBWinaARAqBAKgUAgLQK0Baiq1pWltTRBaKlaARAgLRTtECoRUVG0ACgrO0zc2DlbyfkB8swP0W3DG7w15elZcht3Z8YdgYsjRuMKX/hAp0ht38K7eHjfNb4ufJ01Hwc1iqzxXoHS5j4nNQ+S6WlDamkpCSMkU73xNhJbu2kEU3vcb42sYr12u1hs78bh5LNGDCvybQP8AeI+QKg0Nqfs9ovrQZ2u/7gCfiUHT7XeTAxw51fjxVFvgsWYxHK3jHTq6tFAj1BWNq80TCxOuru45A5oc021wDmnqCLC8yek6dcdYTtRSQCBoC0BaIFTRKKECQK1ArRVa0rS2pgqodoHainaILQK0UwU2GHImhaoiVFJQc528xLmYMNZo6V+W/wBIyuNro4b3pac3ZUdo3ViT/wAvDws9mWfmu7h4+59XPl95zDgDioWHgwNvxIaXLe1NXaB/aFBPAHVIFrgh+1Pi0KjSxzsmOa7/AKd+wCg1e1BrHX+qKJ3wr6JI6HFSn7lE4ce7x9UG/gH2AOWWiqOp7F43eYZ0R1dhpXRX1ZxZ8DXovP4murb9XTincadDa0Nh2gFQKAQCAVCUAgRQRKilam1f/9k=" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                                <div class="card">
                                    <img src="https://img.jagranjosh.com/images/2023/November/15112023/the-united-states-retains-top-spot-for-indian-students.jpg" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">





                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAp4LQDKHNRlP21TAA23juf9x5Kg7srBTYLg&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">




                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWArgtrDNvlnWBtXduadkER2dEicV9afwekw&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">




                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtV7YqrQMejcwQjt6s3woYfTvsvbTy3Zf32Q&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">




                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rXq2RzofKvMKXdw9T2KB3vYUrrwBkLmT-g&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">



                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECZaQCon-4B4U7L6lEXzHKmkob4FFVGdr6Q&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">




                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjpyYUzS2Pg2Sv2VXieQyjqToY6XvFzxXZg&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">




                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BcqjDP46mzkmx5X8-7J88BJmpS1AOx9i_Q&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">



                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLv9ag4S0tjqq7dflHFUtEqskKt_81b2xlyQ&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll