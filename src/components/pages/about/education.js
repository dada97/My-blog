import "./education.css";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div>
      <div class="education-inside">
        <h2 class="education">Education</h2>
        <div class="education-description">
          <div class="LIST">
            <div class="cs">
              <span class="icon">
                <FaGraduationCap size={20} />
              </span>
              <p class="csp">Master of Science in Computer Science</p>
            </div>

            <p class="school">
              National Taiwan University Science and Technology
            </p>
          </div>

          <div class="LIST">
          <div class="cs">
            <span class="icon">
              <FaGraduationCap size={20} />
            </span>
            <p class="csp">Bachelor of Science in Computer Science</p>
          </div>

          <p class="school">
            National Taiwan University Science and Technology
          </p>
          </div>



          {/* <p class="school">
            National Taiwan University Science and Technology
          </p>

          <p class="cs">Bachelor of Science in Computer Science</p>
          <p class="school">
            National Taiwan University Science and Technology
          </p> */}
        </div>
      </div>
    </div>
  );
}
