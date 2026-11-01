import type { CodingVals } from '../CodingPage';

export default function Apply({ v }: { v: CodingVals }) {
  const { t } = v;
  return (
    <section id="apply" className="apply">
      <div className="apply-in">
        <h2>{t.applyTitle}</h2>
        <p className="apply-lead">{t.applyLead}</p>
        <form className="aform">
          <label>
            <span>{t.fName} *</span>
            <input type="text" required />
          </label>
          <label>
            <span>{t.fGrade} *</span>
            <select required>
              <option value="">{t.fChoose}</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </label>
          <label className="full">
            <span>{t.fSchool} *</span>
            <input type="text" required />
          </label>
          <label>
            <span>{t.fPhone} *</span>
            <input type="tel" required />
          </label>
          <label>
            <span>{t.fEmail}</span>
            <input type="email" />
          </label>
          <label className="full">
            <span>{t.fWhy}</span>
            <textarea rows={2} />
          </label>
          <div className="aform-end">
            <button type="button">{t.applyNow}</button>
            <p>{t.applyMeta}</p>
          </div>
        </form>
      </div>
      <div aria-hidden="true" className="wordmark">
        MindMaze
      </div>
    </section>
  );
}
