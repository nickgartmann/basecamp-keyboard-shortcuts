# Basecamp Keyboard Shortcuts

Add enhanced keyboard shortcuts to the Basecamp web application. 

Install at https://addons.mozilla.org/en-US/firefox/addon/basecamp-keyboard-shortcuts/

<table>
  <tr>
    <td><code>ctrl</code>+<code>h</code></td>
    <td>Open the Hey! menu</td>
  </tr>
  <tr>
    <td colspan="2">
      <em>While the Hey! menu is open</em>
    </td>
  </tr>
  <tr>
    <td><code>&#8595;</code> or <code>j</code></td>
    <td>Select the next notification</td>
  </tr>
  <tr>
    <td><code>&#8593;</code> or <code>k</code></td>
    <td>Select the previous notification</td>
  </tr>
  <tr>
    <td><code>Enter</code></td>
    <td>Open the currently selected notification</td>
  </tr>
  <tr>
    <td colspan="2">
      <em>While on the project page</em>
    </td>
  </tr>
  <tr>
    <td><code>c</code></td>
    <td>Jump to campfire in the current project</td>
  </tr>
  <tr>
    <td><code>m</code></td>
    <td>Jump to the message board in the current project</td>
  </tr>
  <tr>
    <td><code>t</code></td>
    <td>Jump to the todos of the current project</td>
  </tr>
  <tr>
    <td><code>d</code> or <code>f</code></td>
    <td>Jump to the Files &amp; Docs of the current project</td>
  </tr>
  <tr>
    <td><code>s</code></td>
    <td>Jump to the schedule of the current project</td>
  </tr>
  <tr>
    <td colspan="2">
      <em>While on the Messagespage</em>
    </td>
  </tr>
  <tr>
    <td><code>&#8595;</code> or <code>j</code></td>
    <td>Select the next message</td>
  </tr>
  <tr>
    <td><code>&#8593;</code> or <code>k</code></td>
    <td>Select the previous message</td>
  </tr>
  <tr>
    <td><code>Enter</code></td>
    <td>Open the currently selected message</td>
  </tr>
  <tr>
    <td><code>Escape</code></td>
    <td>Deselect the currently selected message</td>
  </tr>

</table>

## Building your own

Follow [this guide to get your own Firefox API credentials](https://addons-server.readthedocs.io/en/latest/topics/api/auth.html#access-credentials). 
Then copy the `sample.env` file to a new file called `.env` and fill in your api key and secret. 
Once you have your credentials set you can run `npm run sign` to get a signed version of the plugin for yourself and install it.

