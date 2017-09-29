class WebVST {
  constructor(host, properties = {}) {
    this.input;
    this.output;
    this.properties = {};
    Object.keys(properties).map(property => {
      this.properties[property] = properties[property];
    });
  }
  connect(node) {
    this.output.connect(node.input);
  }
  disconnect() {
    this.output.disconnect();
  }
  onNoteDown() {}
  onNoteUp() {}
}

WebVST.prototype.meta = {
  name: "",
  type: "",
  spec: "0.0.1",
  author: "",
  version: "",
  params: {}
};

class WebVSTEffect extends WebVST {
  constructor(host, properties) {
    super(host, properties);
    this.meta.type = "effect";
  }
}

class WebVSTGenerator extends WebVST {
  constructor(host, properties) {
    super(host, properties);
    this.meta.type = "generator";
  }
}

class WebVSTAnalyzer extends WebVST {
  constructor(host, properties) {
    super(host, properties);
    this.meta.type = "generator";
  }
}

export { WebVST as default, WebVSTEffect, WebVSTAnalyzer, WebVSTGenerator };
