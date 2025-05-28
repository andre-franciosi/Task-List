export default {
  data() {
    return {};
  },
  template: `
    <li>
        <label>
            <span class="task"><slot></slot></span>
            <input type="checkbox" />
        </label>
    </li>
  `,
};
