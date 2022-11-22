import React from "react";

const pluginId = "com.mattermost.test-plugin";

class Plugin {
    initialize(registry, mmStore) {
        const MainApp = () => {
            return <h1>Main</h1>;
        };

        const HeaderComponent = () => {
            return <h1>HeaderComponent</h1>;
        };

        const CentreHeaderComponent = () => {
            return <h1>CentreHeaderComponent</h1>;
        };

        const Title = () => "Test plugin";

        registry.registerProduct(
            `/plugins/${pluginId}`,
            "lock",
            Title,
            `/plugins/${pluginId}`,
            MainApp,
            CentreHeaderComponent, //() => null,
            HeaderComponent,
            false
        );
    }
}

window.registerPlugin(pluginId, new Plugin());
