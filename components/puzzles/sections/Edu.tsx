import type { PuzzlesVals } from '../PuzzlesPage';

export default function Edu({ v }: { v: PuzzlesVals }) {
  return (
    <section id="edu" aria-labelledby="edu-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="edu-head">
          {' '}
          <div>
            {' '}
            <p className="edu-kicker">MindMaze EDU</p> <h2 id="edu-title">Puzzles in the classroom</h2>{' '}
            <p className="edu-intro">
              We bring traditional Mongolian puzzles into the school day: short, hands-on sessions where
              children slow down, test ideas and explain their thinking. Here is how a program works and what
              we are measuring.
            </p>{' '}
          </div>{' '}
          <figure className="edu-fig" aria-label="Illustration: a person whose head is a wooden burr puzzle">
            {' '}
            <img src="/media/774615564104119b5122b2c63b75bf5a.webp" alt="" className="fig-l fig-body" />{' '}
            <img src="/media/48af9914e420382cb7a0ac6230b0cade.webp" alt="" className="fig-l fig-head" />{' '}
            <img src="/media/fe83234b77d4ce396b9191505dc04645.webp" alt="" className="fig-l fig-hand" />{' '}
          </figure>{' '}
        </div>{' '}
        <div className="edu-body">
          {' '}
          <div className="edu-col">
            <h3 className="edu-h">At a glance</h3>
            <table className="glance">
              <tbody>
                <tr>
                  <th scope="row">Where</th>
                  <td>5 aimags · 12 schools</td>
                </tr>
                <tr>
                  <th scope="row">Reach</th>
                  <td>840+ children</td>
                </tr>
                <tr>
                  <th scope="row">Format</th>
                  <td>In-class sessions during the school day</td>
                </tr>
                <tr>
                  <th scope="row">Grades</th>
                  <td>3rd and 4th graders</td>
                </tr>
                <tr>
                  <th scope="row">Puzzles</th>
                  <td>6 traditional puzzles</td>
                </tr>
                <tr>
                  <th scope="row">Team</th>
                  <td>11 mentors &amp; volunteers</td>
                </tr>
              </tbody>
            </table>
          </div>{' '}
          <div className="edu-col">
            {' '}
            <h3 className="edu-h">Impact so far</h3>{' '}
            <p className="edu-note">
              Early estimates from our first sessions. Full survey results from students and teachers are
              coming soon.
            </p>{' '}
            <div className="stats">
              <div>
                <b>78%</b>
                <span>solved a puzzle on their own</span>
              </div>
              <div>
                <b>64%</b>
                <span>focus longer in class, say teachers</span>
              </div>
              <div>
                <b>91%</b>
                <span>want another session</span>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
