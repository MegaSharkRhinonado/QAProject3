import { getValue } from "@testing-library/user-event/dist/utils";

import React from 'react';









const CC41 = () => {
        return (
                <><div className="miniDiv">
                        <center>
                                <form method="post" action="mailto:lordHugePeePee@gmail.com">
                                        <div>
                                                <label>Your Full Name*:</label>
                                                <br /> <input type="text" id="name" style={{ maxWidth: "250px", width: "100%" }} />
                                        </div>

                                        <div>
                                                <label>Email Address*:</label>
                                                <br /> <input type="email" name="email" id="email" style={{ maxWidth: "250px", width: "100%" }} />
                                        </div>

                                        <div >
                                                <label>Phone Number:</label>
                                                <br /> <input type="number" name="number" id="phoneNumber" style={{ maxWidth: "250px", width: "100%" }} />
                                        </div>

                                        <div>
                                                <label for="lang">Topic:</label>
                                                <br />
                                                <select name="Topics" id="lang" style={{ maxWidth: "250px", width: "100%" }}>
                                                        <option value="Movie">Movie Enquiries</option>
                                                        <option value="Seating">Seating Enquiries</option>
                                                        <option value="Accessability">Accessability Enquiries</option>
                                                        <option value="Allergens">Allergen Enquiries</option>
                                                        <option value="Other">Other </option>
                                                </select>
                                        </div>

                                        <div>
                                                <label>Message:</label>
                                                <br />
                                                <textarea rows="10" cols="50" type="text" class="CEN" name="Content Desciption" id="message"
                                                />;


                                        </div>
                                        <input
                                                type="submit"
                                                value={this} />

                                </form>

                        </center>

                        </div>
                </>
        );
}

export default CC41;