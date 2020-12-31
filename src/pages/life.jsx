import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import MetaTags from '../components/metatags/MetaTags';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import DateTimeStamp from '../components/datetimestamp/DateTimeStamp';
import status from '../data/Status';

class About extends Component {
  render() {
    const headerText = 'Current Life in a nutshell ⚡';
    const descText =
      "I tend to update this page every now and then with a list of what I'm upto. This page is honestly more for me than you but I like documenting and well ... this is that.";
    return (
      <div className="life container">
        <MetaTags title="Status | Nayem Alam" />

        <HeaderDesc header={headerText} desc={descText} />
        <p>
          <DateTimeStamp />
        </p>

        <table>
          <tbody>
            <tr>
              <th>Work</th>
              <th>Since</th>
            </tr>
            {status.map((item, id) => (
              <tr key={id} data-aos="flip-left">
                <td>
                  <FontAwesomeIcon
                    className="icon-bullet"
                    icon={faCaretRight}
                  />{' '}
                  &nbsp; {item.work}
                </td>
                <td>{item.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default About;
