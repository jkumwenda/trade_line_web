import React, { Component } from "react";
import BidSidebar from "src/components/BidSidebar";

class HowItWorks extends Component {
  render() {
    return (
      <div className="w-full flex flex-col space-y-8 bg-selago-500">
        <div className="flex justify-center p-6">
          <div className="flex flex-col w-10/12 p-4 py-6">
            <h1 className="text-4xl pb-6">
              <span className="font-extrabold font-raleway-base">How</span>
              <span className="font-raleway-thin"> It Works</span>
            </h1>
            <div className="flex sm:flex-row flex-col space-x-4">
              <div className="flex flex-col space-y-6 sm:w-9/12 w-full">
                <div className="flex justify-center space-x-4 bg-concrete-50 rounded-xl p-4">
                  <div className="sm:w-4/12 w-full py-30 text-center font-raleway text-8xl text-concrete-600">
                    01
                  </div>
                  <div className="sm:w-8/12 w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis consequat est. Duis nulla ante, vestibulum
                    scelerisque euismod aliquet, vestibulum a purus. Vivamus
                    quis vehicula velit, quis accumsan lectus. Cras eget odio
                    eget arcu interdum varius.
                  </div>
                </div>
                <div className="flex justify-center space-x-4 bg-concrete-50 rounded-xl p-4">
                  <div className="sm:w-4/12 w-full py-30 text-center font-raleway text-8xl text-concrete-600">
                    02
                  </div>
                  <div className="sm:w-8/12 w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis consequat est. Duis nulla ante, vestibulum
                    scelerisque euismod aliquet, vestibulum a purus. Vivamus
                    quis vehicula velit, quis accumsan lectus. Cras eget odio
                    eget arcu interdum varius.
                  </div>
                </div>
                <div className="flex justify-center space-x-4 bg-concrete-50 rounded-xl p-4">
                  <div className="sm:w-4/12 w-full py-30 text-center font-raleway text-8xl text-concrete-600">
                    03
                  </div>
                  <div className="sm:w-8/12 w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis consequat est. Duis nulla ante, vestibulum
                    scelerisque euismod aliquet, vestibulum a purus. Vivamus
                    quis vehicula velit, quis accumsan lectus. Cras eget odio
                    eget arcu interdum varius.
                  </div>
                </div>
                <div className="flex justify-center space-x-4 bg-concrete-50 rounded-xl p-4">
                  <div className="sm:w-4/12 w-full py-30 text-center font-raleway text-8xl text-concrete-600">
                    04
                  </div>
                  <div className="sm:w-8/12 w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis consequat est. Duis nulla ante, vestibulum
                    scelerisque euismod aliquet, vestibulum a purus. Vivamus
                    quis vehicula velit, quis accumsan lectus. Cras eget odio
                    eget arcu interdum varius.
                  </div>
                </div>
              </div>
              <div className="sm:w-3/12 w-full">
                <BidSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
